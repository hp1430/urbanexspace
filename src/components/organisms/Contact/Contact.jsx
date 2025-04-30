export const Contact = () => {

    function handleClick() {
        console.log("Button clicked!")
        const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
        console.log(phoneNumber)
        const message = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    return (
        <div>
            <h1
                className="text-5xl font-semibold text-center mt-10 mb-10 text-gray-800"
            >
                Reach Us:
            </h1>
            <div
                className="flex items-start justify-between h-screen bg-cover bg-center"
            >
                
                <div
                    className="flex flex-col items-center justify-center bg-white ml-36 mt-10"
                >
                    <button
                        className="bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 mb-10"
                        onClick={handleClick}
                    >
                        Chat with us on WhatsApp
                    </button>

                    <h1
                        className="text-3xl font-bold text-gray-800 mb-5 "
                    >
                        Urbanex Space
                    </h1>

                    <p
                        className="text-lg font-thin text-gray-600 mb-5 max-w-lg text-center"
                    >
                        H-221, H-BLOCK AYANAGAR, NEW DELHI – 110047
                    </p>

                    <p
                        className="text-lg font-thin text-gray-600 mb-5 max-w-lg text-center"
                    >
                        +91-8750161121 
                    </p>
                    <p
                        className="text-lg font-thin text-gray-600 mb-5 max-w-lg text-center"
                    >
                        xyz@gmail.com 
                    </p>
                </div>
                <div>
                    Map
                </div>
            </div>
        </div>
    )
}