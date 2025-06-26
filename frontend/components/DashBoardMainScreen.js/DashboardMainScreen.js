"use client";
import { PageInfo } from "@/components/PageInfo/PageInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ButtonShacn } from "@/components/ui/button";
import { courses } from "@/lib/courses";
import { useCourse } from "@/hooks/context/useCourse";
import { students } from "@/lib/students";
import { CustomTooltip } from "../Tooltip/curtomTooltip";

export function DashboardMainScreen(props) {
  const { selectedCourseId, clearSelectedCourse } = useCourse();
  const dataResumo = selectedCourseId
    ? [courses.find((course) => course.id == selectedCourseId)]
    : courses;

  const alunosFiltrados = students
    .filter((entry) => {
      if (selectedCourseId) return entry.disciplinaId === selectedCourseId;
      return true;
    })
    .flatMap((entry) => entry.alunos);

  const arquetipoMap = new Map();

  alunosFiltrados.forEach((aluno) => {
    const nome = aluno.arquetipo.nomeArquetipo;
    const descricao = aluno.arquetipo.descricaoArquetipo;

    if (arquetipoMap.has(nome)) {
      arquetipoMap.get(nome).valor += 1;
    } else {
      arquetipoMap.set(nome, {
        nome,
        descricao,
        valor: 1,
      });
    }
  });

  const coresArquetipo = {
    Constante: "#22c55e",
    UltimoHorista: "#facc15",
    Fantasma: "#ef4444",
    Explorador: "#3b82f6",
  };

  const arquetiposDistribuicao = Array.from(arquetipoMap.values()).map(
    (item) => ({
      ...item,
      cor: coresArquetipo[item.nome] || "#8884d8",
    })
  );

  const alunosRiscoAlto = students
    .filter((disciplina) => {
      if (selectedCourseId) return disciplina.disciplinaId === selectedCourseId;
      return true;
    })
    .flatMap((disciplina) =>
      disciplina.alunos.filter((aluno) => aluno.riscoEvasao > 40)
    );
  return (
    <div
      style={{
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PageInfo subtitle={props.subtitle} title={props.title} />
        <ButtonShacn variant="outline" onClick={clearSelectedCourse}>
          Limpar seleção de disciplinas
        </ButtonShacn>
      </div>
      <div className="space-y-6">
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dataResumo.map((disciplina) => (
            <Card key={disciplina.id}>
              <CardHeader>
                <CardTitle>{disciplina.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Risco médio de evasão:
                </p>
                <p className="text-lg font-semibold text-destructive">
                  {disciplina.riscoEvasao}%
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Distribuição de Arquétipos</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    dataKey="valor"
                    data={arquetiposDistribuicao}
                    outerRadius={80}
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {arquetiposDistribuicao.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cor} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risco médio por disciplina</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={dataResumo}>
                  <XAxis dataKey="title" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="riscoEvasao" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Alunos com risco elevado de evasão</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72">
              <div className="space-y-4">
                {alunosRiscoAlto.length === 0 ? (
                  <p className="text-muted-foreground">
                    Nenhum aluno com risco elevado encontrado.
                  </p>
                ) : (
                  alunosRiscoAlto.map((aluno, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 border rounded-md"
                    >
                      <div>
                        <p className="font-medium">{aluno.nome}</p>
                        <p className="text-sm text-muted-foreground">
                          {aluno.email}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {aluno.arquetipo.nomeArquetipo}
                        </Badge>
                        <p className="text-destructive font-bold">
                          {aluno.riscoEvasao}%
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <ButtonShacn variant="outline">Exportar dados</ButtonShacn>
        </div>
      </div>
    </div>
  );
}
