import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type CategoryFormType = {
  setIsModalOpen: (open: boolean) => void;
};
export function CategoryForm({ setIsModalOpen }: CategoryFormType) {
  return (
    <form>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title" className="text-[12px] font-semibold">
              Category Title
            </FieldLabel>
            <Input id="title" autoComplete="off" placeholder="Title...." />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="description"
              className="text-[12px] mb-0  font-semibold"
            >
              Category Description
            </FieldLabel>
            <Textarea
              id="description"
              autoComplete="off"
              placeholder="Description..."
            ></Textarea>
          </Field>
          <Field>
            <FieldLabel
              htmlFor="image"
              className="cursor-pointer font-semibold text-[12px]"
            >
              Category Image
            </FieldLabel>
            <div className="flex items-center gap-4">
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer w-full"
                onClick={() => document.getElementById("image")?.click()}
              >
                Upload Image
              </Button>
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>

      <div className="flex items-center justify-end mt-5 gap-1">
        <Button
          onClick={() => setIsModalOpen(false)}
          variant={"outline"}
          className="cursor-pointer"
          type="button"
        >
          Cancel
        </Button>
        <Button className="cursor-pointer">Add </Button>
      </div>
    </form>
  );
}
