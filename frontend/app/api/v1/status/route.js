import database from "@/infra/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const updatedAt = new Date().toISOString();

    const version = await database.query("SHOW server_version;");
    const parsedVersion = version.rows[0].server_version;

    const maxConnectionsQuery = await database.query("SHOW max_connections;");
    const maxConnections = maxConnectionsQuery.rows[0].max_connections;

    const databaseName = process.env.POSTGRES_DB;

    const openConnectionsQuery = await database.query({
      text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;`,
      values: [databaseName],
    });
    const openConnections = openConnectionsQuery.rows[0].count;

    return NextResponse.json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: parsedVersion,
          max_connections: Number(maxConnections),
          opened_connections: openConnections,
        },
      },
    });
  } catch (error) {
    console.error("Erro na rota /api/v1/status:", error);
    return NextResponse.json(
      { error: "Erro ao obter status do banco de dados" },
      { status: 500 }
    );
  }
}
