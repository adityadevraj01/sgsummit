import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get("q") || ""
    const country = searchParams.get("country") || ""
    const limitParam = searchParams.get("limit")

    const apiUrl = new URL("https://universities.hipolabs.com/search")
    if (q) apiUrl.searchParams.set("name", q)
    if (country) apiUrl.searchParams.set("country", country)

    const res = await fetch(apiUrl.toString(), { cache: "no-store" })
    if (!res.ok) throw new Error("Failed to fetch universities")

    const raw = await res.json()

    // Map to a de-duplicated, sorted list of institution names to match frontend expectations
    const names: string[] = Array.from(
      new Set(
        (Array.isArray(raw) ? raw : [])
          .map((u: any) => (u?.name || "").trim())
          .filter(Boolean)
      )
    ).sort((a, b) => a.localeCompare(b))

    const limit = limitParam ? Math.max(1, Math.min(parseInt(limitParam, 10) || names.length, names.length)) : names.length

    return NextResponse.json({ institutions: names.slice(0, limit) })
  } catch (error) {
    console.error("GET /api/institutions error:", error)
    // Return empty list to keep UI functional
    return NextResponse.json({ institutions: [] })
  }
}