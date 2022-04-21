import Carousel from '../components/Carousel';

const carouselImages = [
    { src: 'https://images.pexels.com/photos/4588019/pexels-photo-4588019.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', alt: "shiba with showcap by Anna Shvet", },
    { src: 'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', alt: "shiba with bowtie by Anna Shvet", },
    { src: "https://images.pexels.com/photos/4588005/pexels-photo-4588005.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", alt: "shiba with glasses by Anna Shvet", },
    { src: 'https://images.pexels.com/photos/4046158/pexels-photo-4046158.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', alt: "a women and shiba by cotton bro", },
    { src: 'https://images.pexels.com/photos/4056509/pexels-photo-4056509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', alt: "a women and shiba by cotton bro", },
];


function Pictures() {
    return (
        <div>
            <Carousel slides={carouselImages} />
        </div>
    );
}

export default Pictures;
