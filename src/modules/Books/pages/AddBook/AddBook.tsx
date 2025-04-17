import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme, useNavigation } from '@react-navigation/native';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import AddBookHeader from 'src/modules/Books/pages/AddBook/components/AddBookHeader.tsx';
import { useAppDispatch } from 'src/store';
import { addAlert } from 'src/store/reducers/alertsReducer.ts';
import { addBook, IBook } from 'src/store/reducers/booksReducer.ts';
import { ThemeType } from 'src/styles/theme.ts';

export default function AddBook() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const theme = useTheme();
    const styles = getStyles(theme);
    const [formData, setFormData] = useState<Partial<IBook>>({
        name: '',
        author: '',
        pages: undefined,
        description: '',
    });

    const onChangeForm = useCallback(
        (field: keyof typeof formData) => {
            return (value: string) => {
                setFormData({ ...formData, [field]: value });
            };
        },
        [formData]
    );

    const submitHandler = useCallback(() => {
        if (formData.name && formData.pages) {
            dispatch(addBook(formData as IBook));
            dispatch(
                addAlert({
                    type: 'success',
                    text: 'Book Added Successfully',
                })
            );
            navigation.goBack();
        }
    }, [dispatch, formData, navigation]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
        >
            <AddBookHeader />
            <ScrollView contentContainerStyle={styles.contentWrapper}>
                <View style={styles.inputContainer}>
                    <Text fontWeight={'500'} style={styles.title}>
                        Name*
                    </Text>
                    <Input
                        placeholder={'Enter name'}
                        onChange={onChangeForm('name')}
                        value={formData.name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text fontWeight={'500'} style={styles.title}>
                        Author
                    </Text>
                    <Input
                        placeholder={'Enter author'}
                        onChange={onChangeForm('author')}
                        value={formData.author}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text fontWeight={'500'} style={styles.title}>
                        Pages*
                    </Text>
                    <Input
                        inputProps={{
                            keyboardType: 'number-pad',
                        }}
                        placeholder={'Enter pages amount'}
                        onChange={onChangeForm('pages')}
                        value={String(formData.pages ?? '')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text fontWeight={'500'} style={styles.title}>
                        Additional description
                    </Text>
                    <Input
                        containerStyle={{
                            height: 140,
                        }}
                        inputProps={{
                            multiline: true,
                        }}
                        placeholder={'Enter description'}
                        onChange={onChangeForm('description')}
                        value={formData.description}
                    />
                </View>
                <Button label={'Submit'} onPress={submitHandler} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        contentWrapper: {
            padding: 16,
            gap: 24,
            paddingBottom: 100,
        },
        inputContainer: {
            gap: 6,
        },
    });
