"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const router = useRouter();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="pb-8">
        <h1 className="text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent text-center mb-8">
          Моята Количка
        </h1>
        <div className="text-center">
          <p className="text-gray-700">Вашата количка е празна</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent text-center mb-8">
        Моята Количка
      </h1>
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto mb-8 border-2 border-pink-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Резюме на поръчката</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b-2 border-pink-200 pb-2 relative">
                <div className="flex justify-between items-start gap-4">
                  {item.imageUrl && (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-pink-200 flex-shrink-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="border-2 border-pink-300 text-pink-400 hover:bg-pink-50"
                    >
                      –
                    </Button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addItem({ ...item, quantity: 1 })}
                      className="border-2 border-pink-300 text-pink-400 hover:bg-pink-50"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold whitespace-nowrap">
                    {((item.price * item.quantity) / 100).toFixed(2)} €
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-pink-200 pt-2 text-lg font-semibold text-right">
            Общо: {(total / 100).toFixed(2)} €
          </div>
        </CardContent>
      </Card>
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => router.push("/checkout/shipping")}
            className="w-full bg-pink-400 text-white hover:bg-pink-500 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Продължи към доставка
          </Button>
        </div>
      </div>
    </div>
  );
}
