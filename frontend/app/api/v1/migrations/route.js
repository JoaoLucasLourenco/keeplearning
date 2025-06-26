import { NextResponse } from "next/server";
import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export async function GET() {
  try {
    const migrations = migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
    });
    return NextResponse.json({
      status: "Migrations executadas com sucesso",
      migrations: migrations,
    });
  } catch (error) {
    console.error("Erro ao rodar migrations:", error);
    return NextResponse.json(
      { error: "Falha nas migrations" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const migrations = migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
    });
    return NextResponse.json({
      status: "Migrations executadas com sucesso",
      migrations: migrations,
    });
  } catch (error) {
    console.error("Erro ao rodar migrations:", error);
    return NextResponse.json(
      { error: "Falha nas migrations" },
      { status: 500 }
    );
  }
}
