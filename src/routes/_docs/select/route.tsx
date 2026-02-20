import { Docs } from "@/components/docs";
import { Select } from "@/components/select";
import { SelectInput } from "@/components/select-input/SelectInput";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs/select")({
  component: SelectPage,
});

const fruits = [
  { value: "apple", label: "Apple", group: "Fruits" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange", group: "Fruits" },
  { value: "grape", label: "Grape", group: "Fruits" },
  { value: "mango", label: "Mango", group: "Fruits" },
];
const timezones = [
  {
    value: "North America",
    items: [
      { value: "est", label: "Eastern Standard Time (EST)" },
      { value: "cst", label: "Central Standard Time (CST)" },
      { value: "pst", label: "Pacific Standard Time (PST)" },
    ],
  },
  {
    value: "Europe",
    items: [
      { value: "gmt", label: "Greenwich Mean Time (GMT)" },
      { value: "cet", label: "Central European Time (CET)" },
    ],
  },
] as const;
type TimezoneGroup = (typeof timezones)[number];
type TimezoneItem = TimezoneGroup["items"][number];

function SelectPage() {
  return (
    <>
      <Docs.Header>Select</Docs.Header>

      <Docs.Section title="Basic">
        <Docs.Preview>
          <Select.Root items={fruits}>
            <Select.Input />
            <Select.Content>
              <Select.Empty>No results found</Select.Empty>
              <Select.List>
                {(item: (typeof fruits)[number]) => (
                  <Select.Item key={item.value} value={item}>
                    {item.label}
                  </Select.Item>
                )}
              </Select.List>
            </Select.Content>
          </Select.Root>

          <SelectInput items={fruits} />
        </Docs.Preview>
      </Docs.Section>

      <Docs.Section title="With Groups and Labels">
        <Docs.Preview>
          <Select.Root items={timezones}>
            <Select.Input />
            <Select.Content>
              <Select.Empty>No results found</Select.Empty>
              <Select.List>
                {(group: TimezoneGroup, index: number) => (
                  <Select.Group key={group.value} items={group.items}>
                    <Select.Label>{group.value}</Select.Label>
                    {group.items.map((item: TimezoneItem) => (
                      <Select.Item key={item.value} value={item}>
                        {item.label}
                      </Select.Item>
                    ))}
                    {index < timezones.length - 1 && <Select.Separator />}
                  </Select.Group>
                )}
              </Select.List>
            </Select.Content>
          </Select.Root>
        </Docs.Preview>
      </Docs.Section>
    </>
  );
}
