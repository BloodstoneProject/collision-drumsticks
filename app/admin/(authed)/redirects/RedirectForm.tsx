import { Field, TextInput, Checkbox } from '../../_components/Field';

type Redirect = {
  id?: string;
  source?: string;
  destination?: string;
  permanent?: boolean;
  is_active?: boolean;
};

export function RedirectForm({
  redirectRow = {},
  action,
  submitLabel = 'Save',
}: {
  redirectRow?: Redirect;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel?: string;
}) {
  return (
    <form action={action} className="space-y-5 max-w-2xl">
      <Field
        label="Source path"
        required
        hint="The URL the visitor lands on. Must start with /. E.g. /old-page"
        htmlFor="source"
      >
        <TextInput name="source" defaultValue={redirectRow.source ?? ''} required placeholder="/old-page" />
      </Field>
      <Field
        label="Destination"
        required
        hint="Where they end up. Path or full URL. E.g. /shop/drumsticks or https://example.com"
        htmlFor="destination"
      >
        <TextInput name="destination" defaultValue={redirectRow.destination ?? ''} required placeholder="/shop/drumsticks" />
      </Field>
      <div className="flex items-center gap-6">
        <Checkbox name="permanent" defaultChecked={redirectRow.permanent ?? true} label="Permanent (308)" />
        <Checkbox name="is_active" defaultChecked={redirectRow.is_active ?? true} label="Active" />
      </div>
      <p className="text-xs text-mute">
        Permanent redirects (308) tell search engines the move is final and pass link equity. Use
        temporary (307) for short-lived swaps. Active toggles whether the redirect fires.
      </p>
      <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
        <button type="submit" className="btn-accent !py-3 !px-6 !text-[0.65rem]">{submitLabel}</button>
      </div>
    </form>
  );
}
