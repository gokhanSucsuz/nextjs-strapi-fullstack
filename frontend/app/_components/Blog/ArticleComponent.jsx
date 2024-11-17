import ArticleHeadline from "./ArticleHeadline";
import LandscapeImage from "./LandscapeImage";
import ParagraphComponent from "./ParagraphComponent";
import ParagraphWithImage from "./ParagraphWithImage";

const ArticleComponent = ({ articleContent }) => {
    const componentType = articleContent.__component.split("blog-article.")[1]
    switch (componentType) {
        case "paragraph-with-image":
            return <ParagraphWithImage paragraphWithImage={articleContent} />
        case "headline":
            return <ArticleHeadline headline={articleContent} />
        case "paragraph":
            return <ParagraphComponent paragraph={articleContent} />
        case "landscape-image":
            return <LandscapeImage landscapeImage={articleContent} />
        default:
            return null;
    }
}

export default ArticleComponent