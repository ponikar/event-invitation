



export const BlockItem = ({ src, tagline }) => {
    return <section className="w-full mx-2 sm:my-0 my-2 border border-highlight shadow items-center justify-self-center bg-white h-52 flex flex-col justify-center rounded-pm">
        <img src={src} className="w-16" />
        <h2 className="text-sm mt-4 text-center w-10/12"> { tagline } </h2>
    </section>
};
