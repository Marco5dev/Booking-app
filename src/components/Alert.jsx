import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "./alertContext";
import { useRef } from "react";


function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={7} w="600px" maxW="1000" backgroundColor={'#ecc607'}>
          <AlertDialogHeader fontSize="40px" fontWeight="bold" paddingTop="0" color="#495e57">
            Oops!
          </AlertDialogHeader>
          <AlertDialogBody color="#495e57" fontSize="23px">{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
