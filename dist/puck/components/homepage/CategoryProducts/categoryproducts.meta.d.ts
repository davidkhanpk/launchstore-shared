export declare const categoryProductsMeta: {
    readonly name: "CategoryProducts";
    readonly label: "Category Products";
    readonly description: "Products-from-a-specific-category section. Grid or carousel (Swiper) display modes. Each card can show image with optional Sale/New badges, rating, price (with compare-at-price), and Add to Cart. Bottom View All button. Consumer fetches via category_id (or override via renderProduct — D-1 escape hatch).";
    readonly category: "homepage";
    readonly intent: readonly ["products", "category", "shop-by-category", "grid", "carousel", "department-products"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["products (consumer-injected, keyed by categoryId)", "loading flag", "error string"];
    readonly copyFields: readonly ["sectionTitle", "sectionSubtitle", "viewAllButtonText", "categoryName"];
    readonly themeable: readonly ["backgroundColor", "textColor", "buttonColor", "buttonTextColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Badges are decorative spans — pure visual. Rating star uses currentColor; if meaningful, wrap group in aria-label. View All is a real anchor with text — keyboard accessible.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["products", "category", "shop", "department", "carousel", "grid"];
    readonly props: {
        readonly sectionTitle: {
            readonly type: "string";
            readonly required: true;
        };
        readonly sectionSubtitle: {
            readonly type: "string";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly categoryId: {
            readonly type: "string";
            readonly required: true;
        };
        readonly categoryName: {
            readonly type: "string";
            readonly required: true;
        };
        readonly displayMode: {
            readonly type: "enum";
            readonly options: readonly ["grid", "carousel"];
            readonly required: true;
        };
        readonly productsPerRow: {
            readonly type: "number";
            readonly required: true;
        };
        readonly maxProducts: {
            readonly type: "number";
            readonly required: true;
        };
        readonly slidesPerView: {
            readonly type: "number";
            readonly required: true;
        };
        readonly slidesPerViewTablet: {
            readonly type: "number";
            readonly required: true;
        };
        readonly slidesPerViewMobile: {
            readonly type: "number";
            readonly required: true;
        };
        readonly spaceBetween: {
            readonly type: "number";
            readonly required: true;
        };
        readonly autoplay: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly autoplayDelay: {
            readonly type: "number";
            readonly required: true;
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly navigation: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly pagination: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageAspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape"];
            readonly required: true;
        };
        readonly showPrice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showAddToCart: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showRating: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showBadges: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showViewAllButton: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly viewAllButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly cardStyle: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "bordered", "shadow"];
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
        readonly buttonColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly buttonTextColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly buttonRadius: {
            readonly type: "enum";
            readonly options: readonly ["medium", "small", "large", "none"];
            readonly required: true;
        };
    };
};
export type CategoryProductsMeta = typeof categoryProductsMeta;
//# sourceMappingURL=categoryproducts.meta.d.ts.map