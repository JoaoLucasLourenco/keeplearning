import Link from "next/link";
export function AppBarItem(props) {
  return (
    <>
      <Link href={props.urlPath}>
        <li
          key={props.urlPath}
          style={{
            display: "flex",
            gap: "1rem",
            backgroundColor: props.active ? "#DBEAFE" : "#ffffff",
            color: props.active ? "#3B82F6" : "#6B7280",
            padding: "0.7rem 1.2rem",
            justifyContent: "flex-start",
            borderRadius: "10px",
            width: "100%",
            alignItems: "center",
          }}
        >
          {props.icon}
          {props.textContent}
        </li>
      </Link>
    </>
  );
}
