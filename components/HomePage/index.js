import Image from "next/image";
import Lottie from "react-lottie";
import data from "../../public/react.json";

export default function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{ padding: "40px", backgroundColor: "#100e17", color: "#ffffff" }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ marginTop: "200px" }}>
            <p style={{ fontSize: "30px", margin: "0" }}> Commonly used </p>
            <p
              style={{
                fontSize: "60px",
                margin: "0",
                color: "rgb(148, 211, 231);",
              }}
            >
              {" "}
              REACT HOOKS !
            </p>
          </div>
          <div style={{ marginTop: "20px", maxWidth: "500px" }}>
            <p style={{ fontSize: "24px", margin: "0" }}>
              What is a React-hook ?
            </p>
            <p style={{ fontSize: "18px", margin: "0", fontWeight: 100 }}>
              Hooks are a new addition in React 16.8 They let you use state and
              other React features without writing a class
            </p>
          </div>
        </div>
        <Lottie options={defaultOptions} height={500} width={500} />
        {/* <Image src="/new.jpg" alt="Vercel Logo" width={572} height={516} /> */}
      </div>
      <div>
        <button
          style={{
            color: "white",
            backgroundColor: "rgb(148, 211, 231);",
            fontSize: "22px",
            outline: "none",
            border: "none",
            height: "40px",
            borderRadius: "12px",
            padding: "8px",
          }}
        >
          Take me to Hooks
        </button>
      </div>
    </div>
  );
}
