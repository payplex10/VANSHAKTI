function PageSkeleton() {
  const shimmerStyle = {
    position: "relative",
    overflow: "hidden",
    background: "#e5e7eb",
    borderRadius: "12px",
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      {/* Hero Skeleton */}
      <div
        style={{
          ...shimmerStyle,
          height: "350px",
          width: "100%",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-150%",
            width: "150%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
            animation: "shimmer 1.5s infinite",
          }}
        />
      </div>

      {/* Title Skeleton */}
      <div
        style={{
          ...shimmerStyle,
          width: "300px",
          height: "40px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-150%",
            width: "150%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
            animation: "shimmer 1.5s infinite",
          }}
        />
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            style={{
              ...shimmerStyle,
              height: "220px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-150%",
                width: "150%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                animation: "shimmer 1.5s infinite",
              }}
            />
          </div>
        ))}
      </div>

      {/* Inline animation */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              left: -150%;
            }
            100% {
              left: 150%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default PageSkeleton;