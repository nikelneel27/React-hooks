import Link from "next/link";
// import { navLinks } from "../utils/data";

export default function Cards() {
  return (
    <div
      style={{ display: "flex", backgroundColor: "#100e17", color: "#ffffff" }}
    >
      <div
        style={{
          backgroundColor: "rgb(148, 211, 231);",
          margin: "20px",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            fontSize: "16px",

            margin: "40px 2px 2px 0",
            padding: "10px",
          }}
        >
          <Link rel="stylesheet" href="/UseStatePage">
            <span>useState</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reprehenderit placeat nam obcaecati illo dolorum possimus vel,
            quibusdam commodi totam.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(148, 211, 231);",
          margin: "20px",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            fontSize: "16px",

            margin: "40px 0 0 0",
            padding: "10px",
          }}
        >
          <Link rel="stylesheet" href="/UseEffectPage">
            <span>useEffect</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reprehenderit placeat nam obcaecati illo dolorum possimus vel,
            quibusdam commodi totam.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(148, 211, 231);",
          margin: "20px",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            margin: "40px 0 0 0",
            padding: "10px",
          }}
        >
          <Link rel="stylesheet" href="/UseContextPage">
            <span>useContext</span>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ipsum
            ab odio iusto dolores atque autem minima deleniti voluptate
            quibusdam.
          </p>
          <button
            style={{
              color: "white",
              padding: "5px 10px",
              backgroundColor: "rgb(148, 211, 231);",
              outline: "none",
              border: "none",
              borderRadius: "16px",
            }}
          >
            Example
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(148, 211, 231);",
          margin: "20px",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            margin: "40px 0 0 0",
            padding: "10px",
          }}
        >
          <Link rel="stylesheet" href="/UseMemoPage">
            <span>useMemo</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reprehenderit placeat nam obcaecati illo dolorum possimus vel,
            quibusdam commodi totam.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(148, 211, 231);",
          margin: "20px",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            margin: "40px 0 0 0",
            padding: "10px",
          }}
        >
          <Link rel="stylesheet" href="/CustomHookPage">
            <span>Custom Hooks</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reprehenderit placeat nam obcaecati illo dolorum possimus vel,
            quibusdam commodi totam.
          </p>
        </div>
      </div>
    </div>
  );
}
