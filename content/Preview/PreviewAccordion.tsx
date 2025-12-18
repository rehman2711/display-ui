import { Accordion } from "@/registry/default/displayui/Accordion"

const PreviewAccordion = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Accordion.Main>
          <Accordion.Trigger className="">
            What is Your Name ?
          </Accordion.Trigger>

          <Accordion.Content className="">
            <p>
              {" "}
              My Name is Disha , My Friends Are Rehman , Palak , Poonam & Reshma
              . I Live in Pune , India . . . I have done my graduation from COEP
              college of Engineering Which is also in Pune .
            </p>
          </Accordion.Content>
        </Accordion.Main>

        <br />

        <Accordion.Main>
          <Accordion.Trigger>List Out Your Friends Name ?</Accordion.Trigger>

          <Accordion.Content>
            <ol>
              <li>Disha</li>
              <li>Rehman</li>
              <li>Palak</li>
              <li>Poonam</li>
              <li>Reshma</li>
            </ol>
          </Accordion.Content>
        </Accordion.Main>
      </div>
    </>
  )
}

export default PreviewAccordion
