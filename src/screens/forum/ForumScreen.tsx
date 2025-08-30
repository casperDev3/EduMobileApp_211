import {
  Alert,
  Image,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMemo, useState} from 'react';
import ForumCard from '../../components/forumCard.tsx';

const ForumScreen = () => {
  // states
  const [forums, setForums] = useState<any[]>([
    {
      id: 1,
      topic:
        'У цьому блозі ми розглянемо найефективніші методи вивчення TypeScript у 2025 році, включаючи нові ресурси, практичні поради та поширені помилки, яких слід уникати.',
      pinned: true,
      category: 'Education',
      creator: {
        name: 'Олександр Коваль',
        role: 'admin',
        poster: 'mentor',
        approved: true,
        avatar: 'https://unsplash.com/photos/6anudmpILw4',
      },
      createdAt: new Date('2025-05-20T10:00:00Z'),
      likes: 42,
      comments: 18,
      share: 7,
    },
    {
      id: 2,
      topic:
        'React 19 приносить низку нових можливостей, які змінюють підхід до розробки. У цій статті ми детально розглянемо ці нововведення та їх вплив на сучасні проекти.',
      pinned: false,
      category: 'Information',
      creator: {
        name: 'Ірина Петренко',
        role: 'moderator',
        poster: 'contributor',
        approved: true,
        avatar: 'https://unsplash.com/photos/1Z2niiBPg5A',
      },
      createdAt: new Date('2025-05-22T14:30:00Z'),
      likes: 35,
      comments: 12,
      share: 5,
    },
    {
      id: 3,
      topic:
        'Docker став невід’ємною частиною сучасної розробки. У цьому посібнику для початківців ми розглянемо основи Docker, його встановлення та перші кроки у створенні контейнерів.',
      pinned: false,
      category: 'Education',
      creator: {
        name: 'Михайло Сидоренко',
        role: 'user',
        poster: 'student',
        approved: false,
        avatar: 'https://tabler.io/avatars/3.jpg',
      },
      createdAt: new Date('2025-05-23T09:15:00Z'),
      likes: 27,
      comments: 9,
      share: 3,
    },
    {
      id: 4,
      topic:
        'Vite швидко набирає популярності як альтернатива Webpack. У цій статті ми порівняємо обидва інструменти та визначимо, чому Vite може бути кращим вибором для вашого проекту.',
      pinned: true,
      category: 'Business',
      creator: {
        name: 'Наталія Литвин',
        role: 'admin',
        poster: 'mentor',
        approved: true,
        avatar: 'https://unsplash.com/photos/7YVZYZeITc8',
      },
      createdAt: new Date('2025-05-21T16:45:00Z'),
      likes: 58,
      comments: 22,
      share: 10,
    },
    {
      id: 5,
      topic:
        'Next.js та Remix — два потужні фреймворки для розробки веб-додатків. У цьому блозі ми порівняємо їхні можливості, переваги та недоліки, щоб допомогти вам зробити правильний вибір.',
      pinned: false,
      category: 'Opportunity',
      creator: {
        name: 'Андрій Бондар',
        role: 'moderator',
        poster: 'contributor',
        approved: true,
        avatar: 'https://tabler.io/avatars/5.jpg',
      },
      createdAt: new Date('2025-05-24T11:20:00Z'),
      likes: 31,
      comments: 14,
      share: 6,
    },
    {
      id: 6,
      topic:
        'GraphQL та REST — два підходи до створення API. У цій статті ми розглянемо їхні відмінності, переваги та недоліки, щоб допомогти вам вибрати найкращий варіант для вашого проекту.',
      pinned: false,
      category: 'Information',
      creator: {
        name: 'Світлана Романюк',
        role: 'user',
        poster: 'student',
        approved: false,
        avatar: 'https://unsplash.com/photos/8xAA0f9yQnE',
      },
      createdAt: new Date('2025-05-25T08:50:00Z'),
      likes: 22,
      comments: 7,
      share: 2,
    },
    {
      id: 7,
      topic:
        'CI/CD з GitHub Actions дозволяє автоматизувати процеси розгортання. У цьому блозі ми розглянемо, як налаштувати CI/CD для вашого проекту за допомогою GitHub Actions.',
      pinned: true,
      category: 'Business',
      creator: {
        name: 'Вікторія Шевченко',
        role: 'admin',
        poster: 'mentor',
        approved: true,
        avatar: 'https://tabler.io/avatars/7.jpg',
      },
      createdAt: new Date('2025-05-20T13:10:00Z'),
      likes: 47,
      comments: 19,
      share: 8,
    },
    {
      id: 8,
      topic:
        'Безпека у веб-розробці є критично важливою. У цій статті ми розглянемо основні принципи безпеки, поширені загрози та способи їх уникнення для захисту ваших додатків.',
      pinned: false,
      category: 'Member Discussion',
      creator: {
        name: 'Денис Кравчук',
        role: 'moderator',
        poster: 'contributor',
        approved: true,
        avatar: 'https://unsplash.com/photos/mEZ3PoFGs_k',
      },
      createdAt: new Date('2025-05-23T17:25:00Z'),
      likes: 39,
      comments: 16,
      share: 4,
    },
  ]);

  const changePinnedStatus = (id: number) => {
    const updatedForums = forums.map(item =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
    );
    setForums(updatedForums);
  };

  const [filters] = useState<string[]>([
    'Усі',
    'Information',
    'Education',
    'Opportunity',
    'Business',
    'Member Discussion',
  ]);

  const [activeFilter, setActiveFilter] = useState<string>('Усі');

  const filteredForums = useMemo(() => {
    return activeFilter !== 'Усі'
        ? forums.filter(
            item => item.category === activeFilter,
        )
        : forums;
  }, [activeFilter, forums]);

  // handlers
  const searchHandler = () => {
    Alert.alert('Pressed Search Icon', 'Pressed Search Icon');
  };
  const handleMessage = () => {
    Alert.alert('Pressed Search Message', 'Pressed Search Message');
  };
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topTitle}>Forum</Text>
          <View style={styles.topIcons}>
            <TouchableOpacity onPress={searchHandler}>
              <Image
                style={styles.topIconsImg}
                source={require('../../assets/search.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleMessage}>
              <Image
                style={styles.topIconsImg}
                source={require('../../assets/Message.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.filters}>
            {filters.map((filter: string, index: number) => (
                <TouchableOpacity
                    key={index}
                    style={
                      filter === activeFilter
                          ? styles.filtersButtonActive
                          : styles.filtersButton
                    }
                    onPress={() => setActiveFilter(filter)}>
                  {/*<Text*/}
                  {/*  style={*/}
                  {/*    filter === activeFilter*/}
                  {/*      ? styles.filtersButtonsTextActive*/}
                  {/*      : styles.filtersButtonsText*/}
                  {/*  }>*/}
                  {/*  {filter}*/}
                  {/*</Text>*/}
                  <Text
                      style={[
                        styles.filtersButtonsText,
                        filter === activeFilter && styles.filtersButtonsTextActive,
                      ]}>
                    {filter}
                  </Text>
                </TouchableOpacity>
            ))}
          </View>
          <View style={styles.forum}>
            {filteredForums
                .sort(item => item.pinned ? -1 : 1)
                .map(item => (
                <ForumCard
                    key={item.id}
                    forum={item}
                    changePinnedStatus={changePinnedStatus}
                />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // forum
  forum: {
    marginBottom: 20,
  },
  // filters
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  filtersButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 10,
  },
  filtersButtonActive: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#7BAFFF',
    backgroundColor: '#EAF2FF',
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 10,
  },
  filtersButtonsText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#A3A3A3',
  },
  filtersButtonsTextActive: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1668E3',
  },
  container: {
    marginHorizontal: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topTitle: {
    fontSize: 24,
    fontWeight: 600,
  },
  topIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topIconsImg: {
    minHeight: 24,
    maxHeight: 24,
    minWidth: 24,
    maxWidth: 24,
    marginLeft: 16,
  },
  //   divider
  divider: {
    marginTop: 10,
    marginBottom: 20,
    height: 0.5,
    backgroundColor: '#cac9c3',
  },
});

export default ForumScreen;
