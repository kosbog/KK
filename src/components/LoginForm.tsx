import * as React from "react";
import { observer } from "mobx-react-lite";
import { Form, InputOnChangeData, Transition, Modal } from "semantic-ui-react";
// import { adminStore } from 'src/stores/AdminStore';

export const LoginForm = observer(({ trigger }: { trigger?: any }) => {
  const [formData, setFormData] = React.useState<any>({});
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, [isVisible]);

  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>, { value, name }: InputOnChangeData) => {
    return setFormData((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // await adminStore.create(formData);
  };

  return (
    <Transition visible={isVisible} animation="fade up" duration={600}>
      <Modal trigger={trigger} >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                placeholder='Username'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
              <Form.Input
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
              />
              <Form.Button content='Save' />
            </Form>
          </div>
        </Modal.Content>
      </Modal>
    </Transition >
  );
});
