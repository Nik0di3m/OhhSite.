import Head from "next/head";
import Menu from "../components/menu/Menu";
import Hero from "../components/strony-www/Hero";
import Faq from "../components/strony-www/faq/Faq";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "../axios";

export default function Home() {
    const [api, setApi] = useState([]);
    const getAPI = async () => {
        await axios
            .get("/strony-www")
            .then((res) => {
                console.log(res);
                setApi(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAPI();
        console.log(api);
        console.log(api.AnswerTitle1);
    }, []);
    return (
        <div>
            <Head>
                <title>{api.MetaTitle}</title>
                <meta
                    name="description"
                    content={api.MetaDescription}
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,800;1,100;1,300;1,400;1,600;1,800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Menu />
            <Hero
                title2={api.HeroTitle}
                text={api.HeroText}
                image={"images/stronyWWW.svg"}
            />
            <main>
                <Faq
                    title1={api.FaqTitle1}
                    title2={api.FaqTitle2}
                    answer1={api.Answer1}
                    answer2={api.Answer2}
                    answer3={api.Answer3}
                    answer4={api.Answer4}
                    answer5={api.Answer5}
                    answer6={api.Answer6}
                    answer7={api.Answer7}
                    answer8={api.Answer8}
                    answertitle1={api.Answer1Title}
                    answertitle2={api.Answer2Title}
                    answertitle3={api.Answer3Title}
                    answertitle4={api.Answer4Title}
                    answertitle5={api.Answer5Title}
                    answertitle6={api.Answer6Title}
                    answertitle7={api.Answer7Title}
                    opis1={api.Opis1}
                    opis2={api.Opis2}
                    opis3={api.Opis3}
                    opis4={api.Opis4}
                    opis5={api.Opis5}
                    opis6={api.Opis6}
                    opis7={api.Opis7}
                />
            </main>

            <Footer />
        </div>
    );
}
