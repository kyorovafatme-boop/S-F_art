"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const router = useRouter();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Вашата количка е празна</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Количка</h1>
      <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Резюме на поръчката</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b pb-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold">
                    {((item.price * item.quantity) / 100).toFixed(2)} лв.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    –
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Общо: {(total / 100).toFixed(2)} лв.
          </div>
        </CardContent>
      </Card>
      <div className="max-w-md mx-auto">
        <Button
          onClick={() => router.push("/checkout/shipping")}
          variant="default"
          className="w-full"
        >
          Продължи към доставка
        </Button>
      </div>
    </div>
  );
}
