import { render, screen } from '@testing-library/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

describe('Custom Accordion', () => {
  it('renders an accordion with items', () => {
    render(
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over styling.
          </nAccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Is it accessible?')).toBeInTheDocument();
    expect(screen.getByText('Yes. It adheres to the WAI-ARIA design pattern.')).toBeInTheDocument();
  });
});