export const Card = ({image, title, description}) => {
    return (
        <div>
            <div>
                <img
                    className="w-80 h-96 object-cover rounded-lg shadow-lg shadow-gray-500/80 hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={image}
                    alt="Card Image"
                />
            </div>
            <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold mt-4">{title}</h2>
                <p
                    className="text-lg font-thin text-gray-600 mb-5 max-w-lg text-center mt-2"
                >
                    {description}
                </p>
            </div>
        </div>
    )
}