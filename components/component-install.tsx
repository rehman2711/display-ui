import { CodeIcon, TerminalIcon } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsTriggerIcon,
  TabsTriggerText,
} from "@/components/focus-tabs"

const ComponentInstall = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs defaultValue="cli">
      <TabsList>
        <TabsTrigger value="cli">
          <TabsTriggerIcon>
            <TerminalIcon />
          </TabsTriggerIcon>
          <TabsTriggerText>CLI</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="manual">
          <TabsTriggerIcon>
            <CodeIcon />
          </TabsTriggerIcon>
          <TabsTriggerText>Manual</TabsTriggerText>
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}

const CLIInstall = ({ children }: { children: React.ReactNode }) => {
  return <TabsContent value="cli">{children}</TabsContent>
}

const ManualInstall = ({ children }: { children: React.ReactNode }) => {
  return <TabsContent value="manual">{children}</TabsContent>
}

export { ComponentInstall, CLIInstall, ManualInstall }
