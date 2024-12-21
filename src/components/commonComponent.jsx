export const CustomNextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: "block",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 2,
        }}
        onClick={onClick}
    />)

export const CustomPrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: "block",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 2,
        }}
        onClick={onClick}
    />);