import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import http from "@/app/shared/http";

export async function POST(req: NextRequest) {
  const { login, password } = await req.json();

  try {
    const authResponse = await http.post("/login", { login, password });
    if (authResponse.status === 201 && authResponse.data) {
      const { accessToken, refreshToken } = authResponse.data;

      const currentDate = new Date();
      const tokenExpiration = new Date(
        currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
      );

      cookies().set("zion@T", accessToken, { expires: tokenExpiration });

      return NextResponse.json({
        data: authResponse.data,
        status: authResponse.status,
        statusText: authResponse.statusText,
      });
    }
    return NextResponse.json(null);
  } catch (error) {
    const e = error as AxiosError;
    return NextResponse.json(
      { error: e.response?.data },
      { status: e.response?.status }
    );
  }
}
