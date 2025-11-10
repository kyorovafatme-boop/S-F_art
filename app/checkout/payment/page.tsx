"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "../checkout-action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ShippingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  postalCode: string;
  econtOffice: string;
}

export default function PaymentPage() {
  const { items } = useCartStore();
  const router = useRouter();
  const [shippingData, setShippingData] = useState<ShippingData | null>(null);

  useEffect(() => {
    // Get shipping data from sessionStorage
    const stored = sessionStorage.getItem("shippingData");
    if (!stored) {
      router.push("/checkout/shipping");
      return;
    }
    setShippingData(JSON.parse(stored));
  }, [router]);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0 || !shippingData) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Зареждане...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Плащане</h1>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Данни за доставка</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <strong>Име:</strong> {shippingData.firstName} {shippingData.lastName}
            </p>
            <p>
              <strong>Имейл:</strong> {shippingData.email}
            </p>
            <p>
              <strong>Телефон:</strong> {shippingData.phone}
            </p>
            <p>
              <strong>Град:</strong> {shippingData.city}
            </p>
            <p>
              <strong>Пощенски код:</strong> {shippingData.postalCode}
            </p>
            <p>
              <strong>Адрес на еконт:</strong> {shippingData.econtOffice}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Поръчка</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold">
                    {item.quantity} x {((item.price * item.quantity) / 100).toFixed(2)} лв.
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-2 text-lg font-semibold mb-4">
              Общо: {(total / 100).toFixed(2)} лв.
            </div>
            <form action={checkoutAction}>
              <input
                type="hidden"
                name="items"
                value={JSON.stringify(items)}
              />
              <input
                type="hidden"
                name="shippingData"
                value={JSON.stringify(shippingData)}
              />
              <Button type="submit" variant="default" className="w-full">
                Продължи към плащане
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

