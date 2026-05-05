import { Field, TextInput, TextArea, Select, Checkbox } from '../../_components/Field';

type Faq = {
  id?: string;
  question?: string;
  answer?: string;
  category?: string;
  sort_order?: number;
  is_active?: boolean;
};

const CATEGORIES = [
  { value: 'general', label: 'General' },
  { value: 'products', label: 'Products' },
  { value: 'shipping', label: 'Shipping' },
  { value: 'endorsements', label: 'Endorsements' },
  { value: 'custom', label: 'Custom' },
  { value: 'wholesale', label: 'Wholesale' },
  { value: 'backstage', label: 'Backstage' },
];

export function FaqForm({
  faq = {},
  action,
  submitLabel = 'Save',
}: {
  faq?: Faq;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel?: string;
}) {
  return (
    <form action={action} className="space-y-5 max-w-3xl">
      <Field label="Question" required htmlFor="question">
        <TextInput name="question" defaultValue={faq.question} required />
      </Field>
      <Field label="Answer" required htmlFor="answer">
        <TextArea name="answer" rows={6} defaultValue={faq.answer} required />
      </Field>
      <div className="grid md:grid-cols-3 gap-5">
        <Field label="Category" required htmlFor="category">
          <Select name="category" defaultValue={faq.category ?? 'general'} options={CATEGORIES} required />
        </Field>
        <Field label="Sort order" hint="Lower shows first within category." htmlFor="sort_order">
          <TextInput name="sort_order" type="number" defaultValue={faq.sort_order ?? 0} />
        </Field>
        <div className="flex items-center pt-7">
          <Checkbox name="is_active" defaultChecked={faq.is_active ?? true} label="Active" />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
        <button type="submit" className="btn-accent !py-3 !px-6 !text-[0.65rem]">{submitLabel}</button>
      </div>
    </form>
  );
}
