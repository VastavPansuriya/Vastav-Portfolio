const NotFound = () => {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(rgba(15,13,23,.9), rgba(15,13,23,.9)), url('/bg2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                style={{
                    background: "#122e3b76",
                    border: "1px solid #1F4456",
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
                <h2>Page not found</h2>
                <p style={{ color: "#b5b5b5" }}>
                    This page doesn’t exist or was moved.
                </p>
                
                <div>
                    <a
                        href="/"
                        style={{
                            color: "#ff8a00",
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        <span> ← Back to home</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
