import { DashboardMainScreen } from "@/components/DashBoardMainScreen.js/DashboardMainScreen";

export default async function Dashboard({ params }) {
  const { id } = await params;

  return (
    <DashboardMainScreen
      title={"Estrutura de dados" + id}
      subtitle={"Ciência da computação"}
    />
  );
}
