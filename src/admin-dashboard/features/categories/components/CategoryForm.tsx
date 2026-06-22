"use client";

import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

import { useCategoryForm } from "../hooks/useCategoryForm";
import type { CategoryFormProps } from "../types";



export function CategoryForm({
  selectedCategory,
  setIsModalOpen,
}: CategoryFormProps) {
  const { control, handleSubmit, onSubmit, register, reset, watchedIcon } =
    useCategoryForm({ selectedCategory, setIsModalOpen });
    console.log(selectedCategory?.icon);
    
  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-rhf-demo" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <div>
              <Label
                htmlFor="image"
                className="flex items-center justify-center border border-dashed gap-2 rounded-md p-2 border-gray-300 
    hover:bg-gray-100 transition cursor-pointer"
              >
                <Upload className="w-4 h-4 text-gray-500" />
                <p>
                  {watchedIcon && watchedIcon.length > 0
                    ? watchedIcon[0].name
                    : selectedCategory?.icon
                      ? selectedCategory.icon.split("/").pop()
                      : "Click to upload icon"}
                </p>
              </Label>
              <Input
                type="file"
                id="image"
                className="hidden"
                accept="image/*"
                {...register("icon")}
              />
            </div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Field>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    placeholder="Type Title here ..."
                    autoComplete="off"
                  />
                </Field>
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="Type description here ...
"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                  </InputGroup>
                </Field>
              )}
            />
            <Controller
              name="isActive"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <div className="flex items-center w-full  space-x-2 justify-center border border-gray-300 rounded-md p-1.5">
                    <Switch
                      id="isActive"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="isActive">Is Active</Label>
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
