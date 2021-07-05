import { Container } from "../components/Common/Container/container.component";
import { PageBase } from "../components/Common/Page-Base/page-base.component";
import {
  ArticleTitle,
  Paragraph,
} from "../components/Common/Typography/article.component";
import { BlogArticle } from "../data/blog.data";

export const Blog = () => {
  return (
    <PageBase>
      <Container className="sm:w-7/12 w-11/12 text-justify">
      <img alt="About Nxt.tech" src="/assets/svgs/about.svg" className="w-11/12 mx-auto mb-20" />
       { BlogArticle.map(({ title, article }, index) => (
         <article className="my-8" key={index}>
           <ArticleTitle title={title}/>
           <Paragraph>
             {article}
           </Paragraph>
         </article>
       ))  }
      </Container>
    </PageBase>
  );
};
