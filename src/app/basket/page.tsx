"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useBasketStore } from "@/store/basket-store";

export default function BasketPage() {
  const items = useBasketStore((state) => state.items);

  return (
    <>
      <PageHeader
        eyebrow="Basket"
        title="Care basket preparation"
        description="Persistent client-side basket state is ready for services, diagnostics, and healthcare package purchases."
      />
      <Section>
        <Container>
          {items.length === 0 ? (
            <EmptyState
              title="No basket items yet"
              description="The persistent basket store is configured and ready for future service selection flows."
            />
          ) : null}
        </Container>
      </Section>
    </>
  );
}
