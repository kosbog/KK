import * as React from "react";
import { observer } from "mobx-react-lite";
import { Form, InputOnChangeData, DropdownProps } from "semantic-ui-react";
import { adminStore } from 'src/stores/AdminStore';
// import { adminStore } from 'src/stores/AdminStore';

export const ProductForm = observer(() => {
  const [formData, setFormData] = React.useState<Partial<Product>>({});
  const [files, setFiles] = React.useState<File[]>([]);
  const fileInput = React.useRef(null);

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

  const handleFilesUpload = (e: React.SyntheticEvent<HTMLInputElement>) => {
    return setFiles((prevState: any) => ([
      ...prevState,
      ...fileInput.current.files
    ]));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // await adminStore.create(formData);
    let a = await adminStore.uploadFiles(files);
    console.info(a);
  };

  console.log(files, 'saved files');
  const seassonOptions: Seasson[] = ['AUTUMN', 'WINTER', 'SPRING', 'SUMMER'];
  const collectionOptions: Collection[] = ['ALL', 'BIKER', 'BOMBER', 'OVERSIZE', 'TRUCKER', 'FUR', 'TEDDY', 'SUEDE', 'DUFF'];
  const labelOptions: Label[] = ['NEW', 'SALE', 'DISCOUNT', 'NONE'];

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
        <Form.Select
          placeholder='Label (e.g. NEW, SALE)'
          name='label'
          value={formData.label}
          onChange={handleSelectChange}
          options={labelOptions.map(item => ({ text: item, value: item }))}
        />
        <Form.Input
          placeholder='Price in $ (e.g. 699)'
          name='price'
          value={formData.price}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder='Discount in % (e.g. 50)'
          name='discount'
          value={formData.discount}
          onChange={handleInputChange}
        />
        <label>
          Upload file:
          <input type="file" multiple={true} ref={fileInput} onChange={handleFilesUpload} />
        </label>
        <Form.Button content='Save' />
      </Form>
    </div>
  );
});
