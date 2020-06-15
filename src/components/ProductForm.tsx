import * as React from "react";
import { observer } from "mobx-react-lite";
import { Form, InputOnChangeData, DropdownProps } from "semantic-ui-react";
// import { adminStore } from 'src/stores/AdminStore';

export const ProductForm = observer(() => {
  const [formData, setFormData] = React.useState<Partial<Product>>({});

  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>, { value, name }: InputOnChangeData) => {
    return setFormData((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (
    e: React.SyntheticEvent<HTMLElement>, { value, name }: DropdownProps
  ) => {
    return setFormData((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // await adminStore.create(formData);
    console.log(formData);
  };

  const seassonOptions: Seasson[] = ['AUTUMN', 'WINTER', 'SPRING', 'SUMMER'];
  const collectionOptions: Collection[] = ['ALL', 'BIKER', 'BOMBER', 'OVERSIZE', 'TRUCKER', 'FUR', 'TEDDY', 'SUEDE', 'DUFF'];
  const labelOptions: Label[] = ['NEW', 'SALE', 'DISCOUNT'];

  return (
    <div className="">
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Description'
          name='description'
          value={formData.description}
          onChange={handleInputChange}
        />
        <Form.Select
          placeholder='Seasson'
          name='seasson'
          value={formData.seasson}
          onChange={handleSelectChange}
          options={seassonOptions.map(item => ({ text: item, value: item }))}
        />
        <Form.Select
          placeholder='Collection type'
          name='collection'
          value={formData.type}
          onChange={handleSelectChange}
          options={collectionOptions.map(item => ({ text: item, value: item }))}
        />
        <Form.Input
          placeholder='Price (e.g. 699)'
          name='price'
          label={'$'}
          labelPosition='right'
          value={formData.price}
          onChange={handleInputChange}
        />
        <Form.Select
          placeholder='Label (e.g. NEW, SALE)'
          name='label'
          value={formData.label}
          onChange={handleSelectChange}
          options={labelOptions.map(item => ({ text: item, value: item }))}
        />
        <Form.Input
          placeholder='Discount (e.g. 50)'
          name='discount'
          label={'%'}
          labelPosition='right'
          value={formData.discount}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Description'
          name='description'
          value={formData.description}
          onChange={handleInputChange}
        />
        <Form.Button content='Save' />
      </Form>
    </div>
  );
});
