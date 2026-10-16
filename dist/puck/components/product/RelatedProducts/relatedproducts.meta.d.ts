export declare const relatedProductsMeta: {
    readonly name: "RelatedProducts";
    readonly label: "Related Products";
    readonly description: string;
    readonly category: "product";
    readonly intent: readonly ["cross-sell", "upsell", "recommend", "related"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["current product context (storefront-injected)"];
    readonly copyFields: readonly ["title", "tagline"];
    readonly themeable: readonly ["textColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Carousel mode uses Swiper — ensure navigation is enabled for keyboard users.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["related", "recommendations", "upsell", "cross-sell", "you may also like", "product grid"];
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Section heading, e.g. \"You May Also Like\".";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Render the section heading.";
        };
        readonly tagline: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Small subheading under the title.";
        };
        readonly showTagline: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Render the tagline.";
        };
        readonly relatedBy: {
            readonly type: "enum";
            readonly options: readonly ["collection", "tags", "category", "upsell", "crosssell", "frequently_bought"];
            readonly required: true;
            readonly description: "How the storefront picks the related products. \"upsell\"/\"crosssell\" fit order-confirmation and product pages; \"collection\"/\"tags\" fit general product pages.";
        };
        readonly maxProducts: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Max products shown (4-8 recommended).";
        };
        readonly displayStyle: {
            readonly type: "enum";
            readonly options: readonly ["grid", "carousel"];
            readonly required: true;
            readonly description: "grid = static rows; carousel = Swiper slider.";
        };
        readonly productCardTemplateId: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Optional saved product-card template id. Leave \"\" for the default card.";
        };
        readonly gridColumns: {
            readonly type: "enum";
            readonly options: readonly ["2", "3", "4", "5"];
            readonly required: true;
            readonly description: "Columns in grid mode.";
        };
        readonly containerPadding: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
            readonly description: "Section padding.";
        };
        readonly textColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path (e.g. \"text.primary\") or hex.";
        };
    };
};
export type RelatedProductsMeta = typeof relatedProductsMeta;
//# sourceMappingURL=relatedproducts.meta.d.ts.map