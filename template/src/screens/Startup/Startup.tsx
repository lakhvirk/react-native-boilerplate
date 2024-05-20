import { Brand, SafeScreen } from '@/components';
import type { ApplicationScreenProps } from '@/types/navigation';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, ErrorText, Loading } from './styles';

function Startup({ navigation }: ApplicationScreenProps) {
  const { t } = useTranslation(['startup']);

  const { isSuccess, isFetching, isError } = useQuery({
    queryKey: ['startup'],
    queryFn: () => {
      return Promise.resolve(true);
    },
  });

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Example' }],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <SafeScreen>
      <Container>
        <Brand />
        {isFetching && <Loading />}
        {isError && <ErrorText>{t('startup:error')}</ErrorText>}
      </Container>
    </SafeScreen>
  );
}

export default Startup;
