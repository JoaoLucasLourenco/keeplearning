export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { nome, descricao, valor } = payload[0].payload;
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm w-64">
        <p className="font-bold">{nome}</p>
        <p className="text-sm text-muted-foreground">{descricao}</p>
        <p className="text-sm mt-1">Total: {valor} aluno(s)</p>
      </div>
    );
  }
  return null;
};
