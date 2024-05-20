import { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import {
  Brand,
  Button,
  ButtonIcon,
  Divider,
  SafeScreen,
  Text,
} from '@/components';
import { fetchOne } from '@/services/users';
import { useAppDispatch, useAppSelector } from '@/store/useStore';
import { setTheme } from '@/store/theme';
import { useQuery } from '@tanstack/react-query';
import { Container, TitleContainer, BottomContainer } from './styles';

function Example() {
  const { t } = useTranslation(['example', 'welcome']);

  const [currentId, setCurrentId] = useState(-1);

  const { theme: currentTheme } = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const { isSuccess, data, isFetching } = useQuery({
    queryKey: ['example', currentId],
    queryFn: () => {
      return fetchOne(currentId);
    },
    enabled: currentId >= 0,
  });

  useEffect(() => {
    if (isSuccess) {
      Alert.alert(t('example:welcome', data.name));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

  const onChangeTheme = () => {
    dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <SafeScreen>
      <ScrollView>
        <Container>
          <Brand />
          <TitleContainer>
            <Text type="HEADER_1">{t('welcome:title')}</Text>
            <Text type="HEADER_2" color="whiteDisabled">
              {t('welcome:subtitle')}
            </Text>
            <Divider height="defaultPadding" />
            <Text type="BODY_1" color="whiteDisabled">
              {t('welcome:description')}
            </Text>
          </TitleContainer>
          <Divider height="defaultPadding" />
          <Button
            title="Click Me"
            isLoading={isFetching}
            onPress={() => {
              setCurrentId(Math.ceil(Math.random() * 10 + 1));
            }}
          />
          <BottomContainer>
            <ButtonIcon
              disabled={isFetching}
              icon="send"
              iconSize="40"
              isRounded
              onPress={() => setCurrentId(Math.ceil(Math.random() * 10 + 1))}
            />
            <ButtonIcon
              icon="switch"
              iconSize="40"
              isRounded
              onPress={onChangeTheme}
            />
            <ButtonIcon
              icon="translation"
              iconSize="40"
              isRounded
              onPress={() =>
                onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
              }
            />
          </BottomContainer>
        </Container>
      </ScrollView>
    </SafeScreen>
  );
}

export default Example;
