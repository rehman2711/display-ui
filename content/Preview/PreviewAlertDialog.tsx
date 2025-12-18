import { AlertDialog } from "@/registry/default/displayui/AlertDialog"

const PreviewAlertDialog = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <AlertDialog.Main>
          <AlertDialog.Trigger>Open Alert</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </AlertDialog.Description>
            <AlertDialog.Actions>
              <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
              <AlertDialog.Confirm onClick={() => alert("Item Deleted!")}>
                Delete
              </AlertDialog.Confirm>
            </AlertDialog.Actions>
          </AlertDialog.Content>
        </AlertDialog.Main>
      </div>
    </>
  )
}
export default PreviewAlertDialog
