import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f8f9fa",
            }}
        >
            <div
                style={{
                    background: "#ffffff",
                    border: "1px solid #ced4da",
                    padding: "32px",
                    borderRadius: "12px",
                    textAlign: "center",
                }}
            >
                <img
                    src="/404cat.gif"
                    alt="404"
                    style={{ width: "500px", borderRadius: "8px", marginBottom: "24px" }}
                />
                <h2 style={{ color: "#212529" }}>Page not found</h2>
                <p style={{ color: "#6c757d" }}>
                    This page doesn't exist or was moved.
                </p>
                
                <div>
                    <Link
                        to="/"
                        style={{
                            color: "#495057",
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        <span> ← Back to home</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;