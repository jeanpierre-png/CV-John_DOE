import React from "react";
import ArticleBlog from "../components/ArticleBlog";
import coder from "../assets/blog/coder.jpg";
import produit from "../assets/blog/croissance.jpg";
import google from "../assets/blog/google.jpg";
import responsive from "../assets/blog/screens.jpg";
import seo_referencement from "../assets/blog/seo.jpg";
import apprentissage_codage from "../assets/blog/technos.png";
import "../stylesCss/blog.css";




export default function Blog() {

    return (

        <section>

           <div className="banner"></div>

            <div>
                <h2 className="main-title mt-5 d-flex justify-content-center align-items-center fs-1">BLOG</h2>

                <div className="d-flex justify-content-center align-items-center text-center mt-1" >
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                </div>

                <hr className="ligne-blue mx-auto" style={{ width: "14%" }} />
            </div>

            <article className="d-flex flex-wrap gap-2 mt-5 mb-5">

                <div className="row row-cols-1 row-cols-md-3 justify-content-center align-items-baseline m-0">

                    <ArticleBlog

                        illustration_image={coder}
                        description_image="Coder son site en HTML/CSS"
                        title_blog="Coder son site en HTML/CSS"
                        blog_description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        date_publication="Publié le 22 août 2022"

                    />

                    <ArticleBlog

                        illustration_image={produit}
                        description_image="Vendre ses produits sur le web"
                        title_blog="Vendre ses produits sur le web"
                        blog_description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        date_publication="Publié le 20 août 2022"

                    />

                    <ArticleBlog

                        illustration_image={google}
                        description_image="Se positionner sur Google"
                        title_blog="Se positionner sur Google"
                        blog_description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        date_publication="Publié le 1 août 2022"

                    />

                    <ArticleBlog

                        illustration_image={responsive}
                        description_image="Coder en responsive design"
                        title_blog="Coder en responsive design"
                        blog_description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        date_publication="Publié le 31 juillet 2022"

                    />

                    <ArticleBlog

                        illustration_image={seo_referencement}
                        description_image="Techniques de référencement"
                        title_blog="Techniques de référencement"
                        blog_description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        date_publication="Publié le 30 juillet 2022"

                    />

                    <ArticleBlog

                        illustration_image={apprentissage_codage}
                        description_image="Apprendre à coder"
                        title_blog="Apprendre à coder"
                        blog_description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        date_publication="Publié le 12 juillet 2022"

                    />
                    
                </div>

            </article>

        </section>

    );
}