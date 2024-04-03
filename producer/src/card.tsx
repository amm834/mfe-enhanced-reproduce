const Card = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <h1>Header of Card</h1>
            {children}
        </div>
    );
};

export default Card;
