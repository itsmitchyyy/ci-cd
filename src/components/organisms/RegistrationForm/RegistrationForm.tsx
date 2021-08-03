import { Form } from 'antd';
import React from 'react';
import { TextInput } from '../../atoms/TextInput';

type Props = {
  layout?: 'horizontal' | 'vertical' | 'inline';
  formData?: {
    username: string;
    password?: string;
    email: string;
    phone?: string;
  };
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RegistrationForm({ layout, formData }: Props) {
  return (
    <Form layout={layout}>
      <Form.Item label="Username" required>
        <TextInput type="text" value={formData?.username} />
      </Form.Item>
      <Form.Item label="Password" required>
        <TextInput type="password" value={formData?.password} />
      </Form.Item>
      <Form.Item label="Email" required>
        <TextInput type="email" value={formData?.email} />
      </Form.Item>
      <Form.Item label="Phone" required>
        <TextInput type="number" value={formData?.phone} />
      </Form.Item>
    </Form>
  );
}
