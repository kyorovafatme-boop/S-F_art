"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-red-600 mb-4">
              Плащането е неуспешно
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-700">
              Съжаляваме, но плащането не беше завършено успешно.
            </p>
            <p className="text-gray-600">
              Ако имате проблеми с плащането или въпроси, моля свържете се с нас:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Имейл за контакт:</p>
              <a
                href="mailto:avoex.contact@gmail.com"
                className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium"
              >
                avoex.contact@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                variant="default"
                className="bg-black text-white hover:bg-gray-800"
              >
                <Link href="/checkout/payment">Опитай отново</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/products">Продължи с пазаруването</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

