import { Step, Steps } from "fumadocs-ui/components/steps"
import {
  Tab as FumadocsTab,
  Tabs as FumadocsTabs,
} from "fumadocs-ui/components/tabs"

import {
  CLIInstall,
  ComponentInstall,
  ManualInstall,
} from "@/components/component-install"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/focus-tabs"

import APITable from "./api-table"
import { ComponentPreview } from "./component-preview"
import { ComponentSource } from "./component-source"

const components = {
  ComponentSource,
  APITable,
  ComponentPreview,
  Tabs: ({
    children,
    items,
    defaultValue,
    ...props
  }: React.ComponentProps<typeof FumadocsTabs>) => (
    <Tabs defaultValue={defaultValue ?? items?.[0]} {...props}>
      <TabsList>
        {items?.map((item) => (
          <TabsTrigger key={item} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  ),
  Tab: ({ value, ...props }: React.ComponentProps<typeof FumadocsTab>) => (
    <TabsContent value={value!} {...props} />
  ),
  Steps,
  Step,
  ComponentInstall,
  CLIInstall,
  ManualInstall,
}

export { components }
