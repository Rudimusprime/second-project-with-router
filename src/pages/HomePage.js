import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest toeria strun?",
        author: "Anonim",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex in nunc eleifend vestibulum." +
            " Mauris quis consectetur nisi. Etiam venenatis maximus erat eget vestibulum. Curabitur molestie vestibulum purus, sit amet volutpat tortor consectetur tincidunt. Fusce a mauris est. Ut nec ex vel sem ornare ornare. Integer ac eros vitae sapien ultricies feugiat. Aliquam interdum molestie diam vitae tristique. Aenean vitae vestibulum neque, id accumsan quam. Cras elementum sollicitudin massa, sit amet tristique turpis ultricies vitae. In hac habitasse platea dictumst. Maecenas luctus varius pellentesque. Duis malesuada, lacus quis commodo convallis, dui est pellentesque nisi, semper tincidunt odio arcu in. ",
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Anonim",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex in nunc eleifend vestibulum." +
            " Mauris quis consectetur nisi. Etiam venenatis maximus erat eget vestibulum. Curabitur molestie vestibulum purus, sit amet volutpat tortor consectetur tincidunt. Fusce a mauris est. Ut nec ex vel sem ornare ornare. Integer ac eros vitae sapien ultricies feugiat. Aliquam interdum molestie diam vitae tristique. Aenean vitae vestibulum neque, id accumsan quam. Cras elementum sollicitudin massa, sit amet tristique turpis ultricies vitae. In hac habitasse platea dictumst. Maecenas luctus varius pellentesque. Duis malesuada, lacus quis commodo convallis, dui est pellentesque nisi, semper tincidunt odio arcu in. ",
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia",
        author: "Anonim",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex in nunc eleifend vestibulum." +
            " Mauris quis consectetur nisi. Etiam venenatis maximus erat eget vestibulum. Curabitur molestie vestibulum purus, sit amet volutpat tortor consectetur tincidunt. Fusce a mauris est. Ut nec ex vel sem ornare ornare. Integer ac eros vitae sapien ultricies feugiat. Aliquam interdum molestie diam vitae tristique. Aenean vitae vestibulum neque, id accumsan quam. Cras elementum sollicitudin massa, sit amet tristique turpis ultricies vitae. In hac habitasse platea dictumst. Maecenas luctus varius pellentesque. Duis malesuada, lacus quis commodo convallis, dui est pellentesque nisi, semper tincidunt odio arcu in. ",
    },
    {
        id: 4,
        title: "Podatki i podateczki",
        author: "Chuj z Żoliborza",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex in nunc eleifend vestibulum." +
            " Mauris quis consectetur nisi. Etiam venenatis maximus erat eget vestibulum. Curabitur molestie vestibulum purus, sit amet volutpat tortor consectetur tincidunt. Fusce a mauris est. Ut nec ex vel sem ornare ornare. Integer ac eros vitae sapien ultricies feugiat. Aliquam interdum molestie diam vitae tristique. Aenean vitae vestibulum neque, id accumsan quam. Cras elementum sollicitudin massa, sit amet tristique turpis ultricies vitae. In hac habitasse platea dictumst. Maecenas luctus varius pellentesque. Duis malesuada, lacus quis commodo convallis, dui est pellentesque nisi, semper tincidunt odio arcu in. ",
    },
    {
        id: 5,
        title: "Jak Hanka przyjebała w karton",
        author: "Marek Mostowiak",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ex in nunc eleifend vestibulum." +
            " Mauris quis consectetur nisi. Etiam venenatis maximus erat eget vestibulum. Curabitur molestie vestibulum purus, sit amet volutpat tortor consectetur tincidunt. Fusce a mauris est. Ut nec ex vel sem ornare ornare. Integer ac eros vitae sapien ultricies feugiat. Aliquam interdum molestie diam vitae tristique. Aenean vitae vestibulum neque, id accumsan quam. Cras elementum sollicitudin massa, sit amet tristique turpis ultricies vitae. In hac habitasse platea dictumst. Maecenas luctus varius pellentesque. Duis malesuada, lacus quis commodo convallis, dui est pellentesque nisi, semper tincidunt odio arcu in. ",
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id}{...article}/>
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;