
import { useParams } from "react-router-dom";
import { Header } from "../Header";

export const BlogArtitulos = () => {
    // Get article id from URL
    const { id } = useParams();

    // Sample data for articles
    const articulos = [
        {
            id: 1,
            title: "articulo 1",
            date: "April 10, 2023",
            content: "This is the content of Article 1",
            author: "John Doe",
            mediaType: "image",
            mediaUrl: "https://example.com/image1.jpg",
        },
        {
            id: 2,
            title: "articulo 2",
            date: "April 9, 2023",
            content: "This is the content of Article 2",
            author: "Jane Smith",
            mediaType: "video",
            mediaUrl: "https://example.com/video2.mp4",
        },
        // Add more articles here
    ];

    // Find the article with the matching id
    const articulo = articulos.find((articulo) => articulo.id === Number(id));

    return (
        <div className="gb-black w-full h-full">

            {/* {articulo ? (
                <div className="bg-black">
                    <Header />
                    <h1 className="text-3xl font-bold mb-4">{articulo.title}</h1>
                    {articulo.mediaType === "image" && (
                        <img src={articulo.mediaUrl} alt={articulo.title} className="mb-4" />
                    )}
                    {articulo.mediaType === "video" && (
                        <video src={articulo.mediaUrl} alt={articulo.title} className="mb-4" controls />
                    )}
                    <p className="text-gray-500 mb-2">{articulo.date}</p>
                    <p className="mb-4">{articulo.content}</p>
                    <p className="text-gray-500">Author: {articulo.author}</p>
                </div>
            ) : (
                <p>Article not found.</p>
            )} */}
        </div>
    );
};



