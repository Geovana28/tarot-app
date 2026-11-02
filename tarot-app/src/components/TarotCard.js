import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform
} from 'react-native';
import { getCardImage } from '../data/cardImages';

export default function TarotCard({
  card,
  isRevealed,
  positionTitle,
  onPress,
  isSelected
}) {
  const animatedValue = useRef(new Animated.Value(isRevealed ? 180 : 0)).current;

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: isRevealed ? 180 : 0,
      friction: 8,
      tension: 10,
      useNativeDriver: true
    }).start();
  }, [isRevealed]);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });

  return (
    <View style={styles.cardWrapper}>
      {positionTitle ? (
        <Text style={styles.positionText} numberOfLines={1}>
          {positionTitle}
        </Text>
      ) : null}

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onPress}
        style={[styles.touchable, isSelected && styles.selectedBorder]}
      >
        {/* Verso da carta (fechada) */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { transform: [{ rotateY: backInterpolate }] },
            // Garante que no Android e iOS o verso fique por cima quando fechado
            { zIndex: isRevealed ? 0 : 2, opacity: isRevealed ? 0 : 1 }
          ]}
        >
          <Image
            source={getCardImage('card-back')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.shimmerOverlay}>
            <Text style={styles.tapPrompt}>Toque para revelar</Text>
          </View>
        </Animated.View>

        {/* Frente da carta (revelada) */}
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            { transform: [{ rotateY: frontInterpolate }] },
            { zIndex: isRevealed ? 2 : 0, opacity: isRevealed ? 1 : 0 }
          ]}
        >
          <View style={[styles.imageInnerContainer, card.isReversed && styles.reversedTransform]}>
            <Image
              source={getCardImage(card.image)}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
          {card.isReversed && (
            <View style={styles.reversedBadge}>
              <Text style={styles.reversedBadgeText}>INVERTIDA</Text>
            </View>
          )}
        </Animated.View>
      </TouchableOpacity>

      {isRevealed ? (
        <Text style={styles.cardNameText} numberOfLines={1}>
          {card.name} {card.isReversed ? '↺' : ''}
        </Text>
      ) : (
        <Text style={styles.cardClosedPlaceholder}>Carta Oculta</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 8
  },
  positionText: {
    color: '#ffd700',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 0.5
  },
  touchable: {
    width: 140,
    height: 220,
    borderRadius: 12,
    elevation: 8,
    shadowColor: '#8a2be2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: '#ffd700',
    borderRadius: 14
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    borderWidth: 1.5,
    borderColor: 'rgba(212, 175, 55, 0.4)'
  },
  cardBack: {
    backgroundColor: '#150d2a'
  },
  cardFront: {
    backgroundColor: '#0c0717'
  },
  imageInnerContainer: {
    width: '100%',
    height: '100%'
  },
  cardImage: {
    width: '100%',
    height: '100%'
  },
  shimmerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 6, 28, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10
  },
  tapPrompt: {
    color: '#e2d4f5',
    fontSize: 11,
    fontWeight: '600',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8
  },
  reversedTransform: {
    transform: [{ rotate: '180deg' }]
  },
  reversedBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(239, 68, 68, 0.9)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6
  },
  reversedBadgeText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '800'
  },
  cardNameText: {
    color: '#e5dcf4',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
    maxWidth: 140
  },
  cardClosedPlaceholder: {
    color: '#6d5a87',
    fontSize: 12,
    marginTop: 6,
    fontStyle: 'italic'
  }
});
