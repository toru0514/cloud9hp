import {createClient, MicroCMSImage, MicroCMSListContent} from "microcms-js-sdk";

// --- Client (lazy initialization) ---

type Client = ReturnType<typeof createClient>;
let _client: Client | null = null;

function getClient(): Client {
  if (_client) return _client;

  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error(
      "MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY must be set in .env.local",
    );
  }

  _client = createClient({serviceDomain, apiKey});
  return _client;
}

// --- Types ---

export type ProductCategory =
  | "woodring"
  | "crystalwoodring"
  | "bangle"
  | "earcuff"
  | "earcuffleaf"
  | "earring"
  | "woodtiepin";

export type Product = {
  slug: string;
  enName: string;
  jpName: string;
  description: string;
  descriptionEn?: string;
  image: MicroCMSImage;
  creemaUrl: string;
  minneUrl: string;
  category: [ProductCategory];
  showOnTop: boolean;
  sortOrder: number;
  detailText?: string;
  detailImages?: { image: MicroCMSImage }[];
} & MicroCMSListContent;

// Category → sectionPath mapping
const CATEGORY_SECTION_PATH: Partial<Record<ProductCategory, string>> = {
  woodring: "wood-ring",
  crystalwoodring: "crystalwoodring",
};

export function getSectionPath(category: ProductCategory): string | undefined {
  return CATEGORY_SECTION_PATH[category];
}

/** microCMS のセレクトフィールド(配列)からカテゴリ文字列を取得 */
export function getCategoryValue(product: Product): ProductCategory {
  return product.category[0];
}

function matchesCategory(product: Product, category: ProductCategory): boolean {
  return product.category[0] === category;
}

// --- Data Fetching ---

const PRODUCTS_ENDPOINT = "products";

export async function getProducts(): Promise<Product[]> {
  try {
    const data = await getClient().getList<Product>({
      endpoint: PRODUCTS_ENDPOINT,
      queries: {
        limit: 100,
        orders: "sortOrder",
      },
    });
    return data.contents;
  } catch (err) {
    console.error("[microcms] getProducts failed:", err);
    return [];
  }
}

export async function getProductsByCategory(
  category: ProductCategory,
): Promise<Product[]> {
  try {
    const data = await getClient().getList<Product>({
      endpoint: PRODUCTS_ENDPOINT,
      queries: {
        limit: 100,
        filters: `category[equals]${category}`,
        orders: "sortOrder",
      },
    });
    return data.contents;
  } catch (err) {
    console.error("[microcms] getProductsByCategory failed:", err);
    return [];
  }
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  try {
    const data = await getClient().getList<Product>({
      endpoint: PRODUCTS_ENDPOINT,
      queries: {
        limit: 1,
        filters: `slug[equals]${slug}`,
      },
    });
    return data.contents[0];
  } catch (err) {
    console.error("[microcms] getProductBySlug failed:", err);
    return undefined;
  }
}

export async function getProductsWithDetail(
  sectionPath: string,
): Promise<Product[]> {
  // Find category for this sectionPath
  const category = (
    Object.entries(CATEGORY_SECTION_PATH) as [ProductCategory, string][]
  ).find(([, path]) => path === sectionPath)?.[0];

  if (!category) return [];

  try {
    const data = await getClient().getList<Product>({
      endpoint: PRODUCTS_ENDPOINT,
      queries: {
        limit: 100,
        filters: `category[equals]${category}[and]detailText[exists]`,
        orders: "sortOrder",
      },
    });
    return data.contents;
  } catch (err) {
    console.error("[microcms] getProductsWithDetail failed:", err);
    return [];
  }
}

// Category display order for product listing page
const CATEGORY_ORDER: {
  category: ProductCategory;
  id?: string;
  title: string;
}[] = [
  {category: "woodring", id: undefined, title: "- WOOD RING -"},
  {category: "crystalwoodring", id: "crystalwoodring", title: "- CRYSTAL & WOOD RING -"},
  {category: "bangle", id: "bangle", title: "- WOOD BANGLE -"},
  {category: "earcuff", id: "earcuff", title: "- WOOD EARCUFF -"},
  {category: "earcuffleaf", id: "earcuffleaf", title: "- WOOD EARCUFF LEAF -"},
  {category: "earring", id: "earring", title: "- WOOD EARRING -"},
  {category: "woodtiepin", id: "tiepin", title: "- WOOD TIE PIN -"},
];

export type ProductSection = {
  id?: string;
  title: string;
  items: Product[];
};

export async function getProductSections(): Promise<ProductSection[]> {
  const allProducts = await getProducts();

  return CATEGORY_ORDER.map(({category, id, title}) => ({
    id,
    title,
    items: allProducts
      .filter((p) => matchesCategory(p, category))
      .sort((a, b) => a.sortOrder - b.sortOrder),
  }));
}
